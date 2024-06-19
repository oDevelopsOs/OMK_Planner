import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../../models/user.js";
import { check } from "../../utils/password.handler.js";

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
    try {
        const findUser = await UserModel.findOne({ email });
        done(null, findUser);
    } catch (err) {
        done(err, null);
    }
});

passport.use('local', new LocalStrategy(
    { usernameField: 'email' }, 
    async (email, password, done) => {
        try {
            const findUser = await UserModel.findOne({ email });
            if (!findUser) {
                return done(null, false, { message: 'Incorrect email or password.' });
            }
            const isMatch = await check(password , findUser.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect email or password.' });
            }
            return done(null, findUser);
        } catch (err) {
            return done(err);
        }
    }
));

export default passport;
