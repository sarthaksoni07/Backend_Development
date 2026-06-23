const getStudent =('/:id',(req,res)=>{
    res.send(req.params);
})
module.exports={getStudent};