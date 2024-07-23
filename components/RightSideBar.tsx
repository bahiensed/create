import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const RightSideBar = () => {
  return (
    <section className='right_sidebar text-white-1 '>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      Right SideBar
    </section>
  )
}

export default RightSideBar