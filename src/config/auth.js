module.exports = {
    authAdmin: (req, res, next) => {
        
        if(req.isAuthenticated() && req.user.usertype == 'A') {
            return next()
        }

        else {
            console.log('Nao está logado')
            res.redirect('/')
        }

    },

    authStudent: (req, res, next) => {

        if (req.isAuthenticated() && req.user.usertype == 'S') {
            return next()
        }

        else {
            console.log('Não está logado')
            res.redirect('/')
        }

    },

    authTeacher: (req, res, next) => {

        if (req.isAuthenticated() && req.user.usertype == 'T') {
            return next()
        }

        else {
            console.log('Não está logado')
            res.redirect('/')
        }

    }
}