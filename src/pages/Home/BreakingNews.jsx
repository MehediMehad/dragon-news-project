import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-2">
             <button className="btn btn-secondary">Breaking News</button>
             <Marquee className="" pauseOnHover={true} speed={100}>
                <NavLink className='mr-12' to='/'> I can be a React component, multiple React components, or just some text....</NavLink>
                <NavLink className='mr-12' to='/'> I can be a React component, multiple React components, or just some text....</NavLink>
                <NavLink className='mr-12' to='/'> I can be a React component, multiple React components, or just some text....</NavLink>
                <NavLink className='mr-12' to='/'> I can be a React component, multiple React components, or just some text....</NavLink>
             </Marquee>
        </div>
    );
};

export default BreakingNews;