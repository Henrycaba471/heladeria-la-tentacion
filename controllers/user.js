const User = require('../models/User');


const home = (req, res) => {
    res.render('index');
};

const domicilios = (req, res) => {
    res.status(200).json({ msg: "come soon" });
}

const saveUser = async (req, res) => {
    const params = {
        name: 'Henry',
        lastname: 'Cañizares',
        document: '1005064180',
        email: 'henrycaba471@gmail.com',
        password: '123'
    }
    if (!params.name || !params.lastname || !params.email || !params.password || !params.document) {
        return res.status(401).send('<h1>Unauthorized</h1>')
    }
    const userSaved = new User(params);
    try {
        await userSaved.save();
        return res.status(200).send({
            msg: 'Se guardo exitosamente',
            user: userSaved
        })
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).send({ message: 'Acceso denegado' })
    }

    try {
        const user = await User.findOne({ document: username });
        console.log(user);
        return res.status(200).send({ user: user });

    } catch (error) {
        console.log(error);
    }


    console.log(req.body);
    // Aquí puedes realizar la validación de usuario y contraseña
};


module.exports = {
    home,
    domicilios,
    saveUser,
    login
}