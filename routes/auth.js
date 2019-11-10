module.exports = (router, db) => {

    router.get('/', (req, res) => {
        res.status(200).send('AUTH')
    })

    // router.post('/register', (req,res)=>{
    //     db.sql.query('select user_id from user WHERE user_id = ?;',[req.body.user_id], (err, user_data)=>{
    //         if(err) throw err
    //         else if(user_data.length>0){
    //             console.log(user_data)
    //             res.status(401).send('웅~ 안대')
    //         }
    //         else {
    //             db.sql.query('insert into user (user_id, user_pw) values (?,?);', [req.body.user_id, req.body.user_pw], (err) => {
    //                 if (err) throw err;
    //                 else {
    //                     res.status(200).send(req.body)
    //                 }
    //             })
    //         }
    //     })
    // })

    router.post('/register', async (req, res)=>{
        let re = await db.pool.query('select user_id from user WHERE user_id = ?;',[req.body.user_id])

        if(re[0].length<1){
            res.status(200).send(req.body);
        }
        else{
            res.status(401).send('웅 이미 있어');
        }
        // let conn = await db.pool.getConnection()
        //
        // conn.query('select user_id from user WHERE user_id = ?;',[req.body.user_id])
        //
        // db.pool.releaseConnection(conn)
        // try {
        //     if (user_data.length < 1) {
        //         await db.pool.query('insert into user (user_id, user_pw) values (?,?)', [req.body.user_id, req.body.user_pw])
        //         res.status(200).send(req.body)
        //
        //     } else {
        //         res.status(401).send({success:false, message:"이미 존재하는 계정입니다."})
        //     }
        // }catch(err){
        //     throw err;
        // }
    })

    router.post('/login', (req, res)=>{
        db.sql.query('select user_id, user_pw from user where user_id = ? AND user_pw = ?',[req.body.user_id,req.body.user_pw], (err, user)=>{
            if(err) throw err
            else if(user.length<=0){
                res.status(403).send('없어')
            }
            else{
                console.log(user);
                res.status(200).send(user)
            }

        })
    })



    return router
}