import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <nav className='initial_nav' >
      <div className="logo">
        <Image src="/noon.jpg" alt="site logo" width={60} height={60} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/Favourites/"><a>Liked</a></Link>
    </nav>
    <navmob className='mobile_nav' >
 <div className="nav_bar">
     <div className="col-6">   <Link href="/"><a><i class="fas fa-home"></i></a></Link>    </div>
    <div className="col-6"><Link href="/Favourites/"><a><i class="fas fa-heart"></i></a></Link></div>
 </div>
 
    </navmob>
    </>
  );
}
 
export default Navbar;