import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import Link from 'next/link'
import { MdEmail, MdLock } from 'react-icons/md'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<MdEmail />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<MdLock />}
      />
      <a
        href="#"
        className="block text-small text-black no-underline text-right hover:text-[#4d4d4d]"
      >
        Forgot your password?
      </a>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Don&apos;t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
