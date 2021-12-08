const { BadRequestError } = require("../expressError");

// make a SQL Update based on Object Keys that are provided and handles parameters accordingly
// assigns $1 $2 to each key 
// keys must be part of existing JSON Schema
function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  // each object key represents a SQL column to update and is converted to $1 $2
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );
  // returns setCols = SQL: SET statement & values = SQL VALUES statement
  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}



module.exports = { sqlForPartialUpdate };
