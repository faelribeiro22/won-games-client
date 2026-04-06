import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<MdAccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        placeholder="Confirm Password"
        type="password"
        icon={<MdLock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
