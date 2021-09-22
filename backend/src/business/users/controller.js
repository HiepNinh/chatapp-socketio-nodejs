module.exports = class UserController {
    constructor(
        createUserCase,
        loginUserCase
    ) {
        this.createUserCase = createUserCase;
        this.loginUserCase = loginUserCase;
    }

    createUser = async (req, res, next) => {
        try{
            const result = await this.createUserCase.execute(req.body);
            res.status(201).json(result);
        } catch(err) {
            err.code = 400;
            next(err);
        }
    }

    login = async (req, res, next) => {
        try{
            const result = await this.loginUserCase.execute(req.body);
            res.status(200).json(result);
        }catch(err) {
            err.code = 400;
            next(err);
        }
    }
}