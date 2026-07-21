import Note from "./Notes.js";
import User from "./User.js";

User.hasMany(Note, {
  foreignKey: "userId",
  as: "notes",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export { User, Note };