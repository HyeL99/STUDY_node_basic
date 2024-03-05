const express = require('express');

const app = express();

const db = require('./models');

const { Member } = db;

app.use(express.json());    // middleware

// app.use((req, res, next) => {
//     console.log(req.query);
//     next();
// });

app.get('/api/members', async (req, res) => {
    /* route handler */
    // res.send(members);
    const { team } = req.query;

    if(team){
        const teamMembers = await Member.findAll({where: {team: team}});
        res.send(teamMembers);
    } else {
        const members = await Member.findAll();
        res.send(members);
    }
});

app.get('/api/members/:id', async (req, res) => {
    const {id} = req.params;    // params는 String 타입.

    const findMember = await Member.findOne({where: {id}});
    if(findMember){
        console.log('123', findMember.toJSON());
        res.send(findMember);
    } else {
        res.status(404).send({message: 'There is no such member.'});
    }
    
});

app.get('*', (req, res) => {
    res.send('<h1>This page is not available.</h1>');
});

app.post('/api/members', async (req, res) => {
    const newMember = req.body;
    // const member = Member.build(newMember);
    // await member.save();

    const member = await Member.create(newMember);
    res.send(member);
});

// app.put('/api/members/:id', async (req, res) => {
//     const { id } = req.params;
//     const newInfo = req.body;

//     const result = await Member.update(newInfo, {where: {id}});

//     if(result[0]){
//         res.send({message: `${result[0]} row(s) affected.`});
//     } else {
//         res.status(404).send({message: 'There is no member with the id!'});
//     }
// });

app.put('/api/members/:id', async (req, res) => {
    const { id } = req.params;
    const newInfo = req.body;

    const member = await Member.findOne({where:{id}});

    if(member) {
        Object.keys(newInfo).forEach(prop => member[prop] = newInfo[prop]);

        await member.save();
        res.send(member);
    } else {
        res.status(404).send({message: 'There is no member with the id!'});
    }

    
});

app.delete('/api/members/:id', async (req, res) => {
    const { id } = req.params;
    
    const deletedCount = await Member.destroy({where:{id}});

    if(deletedCount){
        res.send({message: `${deletedCount} row(s) deleted.`});
    } else {
        res.status(404).send({message: 'There is no member with the id!'});
    }
});

app.listen(3000, () => {
    console.log('Server is listening...');
});