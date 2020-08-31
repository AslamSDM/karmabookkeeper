const db = require('mysql2');
const { request } = require('express');

pool =db.createPool({
    
    password : "dbmon",
    user : "dbmon",
    database : "books",
    host: "localhost",
    port: 3306,
    debug: true
    
}
);
console.log('db connected')
let library = {};

  const GetAll = (res,req) =>{
      pool.query("SELECT * FROM books",(error, results) => {
        if (error) {
          return console.error(error.message);
        }else{
      res.json(results);
      // console.log(results);
        return (results);}

      });

  };
  const GetAuthor =(res,req,id) =>{
    // id = parseInt(req.params.id)
    pool.query("SELECT * FROM authors WHERE authorid = ?",[id],(error, results) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log(id);
    
      res.json(results);
    }
  });
}

const Getbooksauth =(res,req,id) =>{
    // id = parseInt(req.params.id)
    pool.query("SELECT * FROM books WHERE author = ?",[id],(error, results) => {
      if (error) {
        return console.error(error.message);
      }else{
        console.log(id);
    
      res.json(results);
    }
  });
}

const GetRat = (res,req) =>{
  id = parseInt(req.body.id)

if (id == NaN)
{ 
  console.log(id);
   pool.query("SELECT * FROM ratings",(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }}
)}

else{
  pool.query("SELECT * FROM ratings WHERE bookid = ?",[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
}
  })
}
}
  
const GetRatb = (res,req,id) =>{
  id = parseInt(req.body.id)
  pool.query("SELECT * FROM rating WHERE book = ?",[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}



const PostBook = (res,req,id) =>{
  book = req.body.name;
  auth = req.body.author;
  id = parseInt(req.body.authorid);
  authorid=id;
  console.log(book,auth,id,authorid);
  // if(id==NaN){
  // pool.query("SELECT * FROM authors where name = ?",[auth],(error,results)=>{
  //   if (error) {
  //     return console.error(error.message);
  //   }else{
  //     const r = results 
  //     if (results.lenght==0)
  //       pool.query("INSERT INTO authors (name) VALUES(?)",[auth])
  //       pool.query("SELECT authorid from authors WHERE name = ?",[auth],authorid=results)
  // }})
  // console.log("/n mYaire /n"+r)

  // pool.query("INSERT INTO authors (name) VALUES(?)",[auth])
  // pool.query("SELECT authorid from authors WHERE name = ?",[auth],authorid=r)

  //     }
  
  // // })}
  pool.query("INSERT INTO books (name,author) VALUES(?,?)",[book,authorid],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
      }
const PostRat = (res,req,id) =>{
  id = parseInt(req.body.id)
  let rating = parseInt(req.body.rating)
  console.log(rating)

  pool.query("INSERT INTO ratings (bookid,rating) VALUES(?,?)",[id,rating],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}
const Postauth = (res,req,id) =>{
  // id = parseInt(req.body.id)
  name = req.body.name;
  console.log(name);

  pool.query("INSERT INTO authors (name) VALUES (?)",[name],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
  
    res.json(results);
  }
});
}

const UpdBook = (res,req) =>{
  name = req.body.name
  auth = parseInt(req.body.authorid)
  id = parseInt(req.body.id)

  pool.query("UPDATE books SET name = ? ,author = ? WHERE bookid = ?",[name],[auth],[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}

const UpdAuth = (res,req) =>{
  name = req.body.name
  // auth = parseInt(req.body.id)
  id = parseInt(req.body.id)

  pool.query("UPDATE authors SET name = ? WHERE authorid = ?",[name],[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}

const UpdRat = (res,req) =>{
  // name = req.body.name
  // auth = parseInt(req.body.id)
  id = parseInt(req.body.id);
  rat = parseInt(req.body.rat);
  bkid = parseInt(req.body.bookid);
  pool.query("UPDATE ratingss SET rating = ? ,bookid = ? WHERE ratingid = ?",[rat],[bkid],[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}

const DelBook = (res,req) =>{
  // name = req.body.name
  // auth = parseInt(req.body.id)
  id = parseInt(req.body.id)

  pool.query("DELETE FROM books WHERE bookid = ?",[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}


const DelAuth = (res,req) =>{
  // name = req.body.name
  // auth = parseInt(req.body.id)
  id = parseInt(req.body.id)

  pool.query("DELETE FROM authors WHERE authorid = ?",[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}


const DelRat = (res,req) =>{
  // name = req.body.name
  // auth = parseInt(req.body.id)
  id = parseInt(req.body.id)

  pool.query("DELETE FROM rating WHERE ratingid = ?",[id],(error, results) => {
    if (error) {
      return console.error(error.message);
    }else{
      console.log(id);
  
    res.json(results);
  }
});
}



module.exports = {GetAll,GetAuthor,Getbooksauth,GetRat,GetRatb,PostBook,PostRat,Postauth,UpdAuth,UpdBook,UpdRat,DelAuth,DelBook,DelRat,};
