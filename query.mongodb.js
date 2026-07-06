use("sample_mflix");

// Exercise 1
// db.comments.findOne({ email: "john_bishop@fakegmail.com" });
// db.comments.findOne({ name: "John Bishop" });

// Exercise 2
// db.movies.findOne({ type: "movie", rated: "TV-G" });
// db.movies.find({ type: "movie", rated: "TV-G" }).count();

// Exercise 3
// db.theaters.find({ "location.address.state": "AL" }).count();
// db.theaters.find({ "location.address.city": "La Quinta" }).count();
// db.theaters.findOne({ "location.address.state": "AL" })
// db.theaters.findOne({ "location.address.city": "La Quinta" })

// Exercise 4
// db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();
// db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();
// db.movies.findOne({ plot: { $regex: "American", $options: "i" } })
// db.movies.findOne({ plot: { $regex: "street.$", $options: "i" } })

// Exercise 5
// db.movies.find().sort({ runtime: -1 }).limit(5);
// db.movies
//   .find({ runtime: { $lt: 60 } })
//   .sort({ runtime: -1 })
//   .limit(5);
// ข้อข้างล่างไม่เข้าใจคำถามค่ะ T_T
// db.movies
//   .find({ year: { $gt: 1965 } })
//   .sort({ "awards.wins": -1 })
//   .limit(3);
// db.movies
//   .find({
//     released: { $gte: new Date("1990-01-01"), $lt: new Date("2001-01-01") },
//   })
//   .count();

// Exercise 6
// db.movies.find({
//   type: "movie",
//   released: { $gte: new Date("1950-01-01"), $lt: new Date("1971-01-01") },
//   countries: { $in: ["USA"] },
// });
// db.movies
//   .find({
//     type: "movie",
//     genres: { $all: ["Drama", "History"] },
//     year: { $gt: 1970 },
//   })
//   .count();
// db.movies.find({ cast: { $in: ["Roy L. McCardell"] } }).count();
// db.movies.find({ directors: { $in: ["Hal Roach"] } }).count();
// db.movies
//   .find({ directors: { $in: ["Hal Roach"] } })
//   .sort({ released: -1 })
//   .limit(1);
// db.movies.find({ directors: { $in: ["Hal Roach"] } }, { "awards.wins": 1 });

// ข้อนี้ไม่เกี่ยวค่ะ
// db.movies
//   .find({ cast: { $in: ["Chiwetel Ejiofor"] } }, { "awards.wins": 1 })
//   .sort({ "awards.wins": -1 });
