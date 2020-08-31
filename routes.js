const express = require('express');
const router = express.Router();
const sql = require('./query');
const bodyParser = require('body-parser');


//GET
router.get('/books',(req,res) => {
    const list =  sql.GetAll(res,req);


});
router.get('/authors/:id',(req,res) => {
    id = req.params.id
    sql.GetAuthor(res,req,id);


});
router.get('/books/author/:id',(req,res) => {
    id = req.params.id
    sql.Getbooksauth(res,req,id);


});
router.get('/ratings/',(req,res) => {
    // id = req.params.id
    sql.GetRat(res,req);


});
router.get('/ratings/:id',(req,res) => {
    id = req.params.id
    sql.GetRatb(res,req,id);


});

//Post

router.post('/ratings/',(req,res) => {
    id = req.params.id
    sql.PostRat(res,req,id);


});
router.post('/books/',(req,res) => {
    id = req.params.id
    sql.PostBook(res,req,id);


});
router.post('/authors/',(req,res) => {
    id = req.params.id
    sql.Postauth(res,req,id);


});

//PUT

router.put('/authors/:id',(req,res) => {
    id = req.params.id
    sql.UpdAuth(res,req,id);


});
router.put('/books/:id',(req,res) => {
    id = req.params.id
    sql.UpdBook(res,req,id);


});
router.put('/ratings/:id',(req,res) => {
    id = req.params.id
    sql.UpdRat(res,req,id);


});
//DELETE

router.delete('/authors/:id',(req,res) => {
    id = req.params.id
    sql.DelAuth(res,req,id);


});
router.delete('/books/:id',(req,res) => {
    id = req.params.id
    sql.DelBook(res,req,id);


});

router.delete('/ratings/:id',(req,res) => {
    id = req.params.id
    sql.DelRat(res,req,id);


});


module.exports=router;
