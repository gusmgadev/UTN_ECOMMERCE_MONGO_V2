import User from "../models/user.model.js";

class UserRepository {
    static async obtenerPorId(id) {
        const user = await User.findOne({_id: id});
        return user
    }

    static async obtenerPorEmail(email) {
        const user = await User.findOne({email: email});
        return user;
    }

    static async guardarUsuario(user) {
        return await user.save()
    }
    static async setEmailVerified(email) {
        const user = await UserRepository.obtenerPorEmail(email);
        user.emailVerified = true;
        return await UserRepository.guardarUsuario(user);
    }
}

export default  UserRepository