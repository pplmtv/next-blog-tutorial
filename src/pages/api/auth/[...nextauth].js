import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import axios from 'axios'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === 'google') {
                const accessToken = account.access_token;
                const idToken = account.id_token;

                try {
                    const response = await axios.post(
                        `${process.env.DJANGO_URL}/api/social/login/google/`,
                        {
                            access_token: accessToken,
                            id_token: idToken,
                        }
                    )

                    const { access_token } = response.data;
                    user.accessToken = access_token;

                    return true
                } catch (error) {
                    return false
                }
            }
            return false
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                const { accessToken } = user

                token.accessToken = accessToken
            }

            return token
        },

        async session({ session, token, user }) {

            session.accessToken = token.accessToken
            return session
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
})
