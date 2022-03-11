var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new Schema(
  {
    name: { type: String },
    email: {
		type: String,
		unique: true,
		lowercase: true
	},
    password: { type: String },
  },
  {
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

UserSchema.pre("save", function (next) {
  var self = this;
  if (!self.isModified("password")) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(self.password, salt, function (err, hash) {
      if (err) return next(err);
      self.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, callback);
};

var Model = mongoose.model("User", UserSchema);
module.exports = Model;
