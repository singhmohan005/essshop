import { CartIcon} from "../Icons";
import Search from "../Search";
import LanguageSelector from "../LanguageSelector";

const Nav = () => {

    const searchBox = <div>
        <input />
    </div>

    return(
        <div className="flex justify-between p-5 items-center border border-b-gray-200">
            <h2>ESS Shop</h2>
            <div>
                <Search />
            </div>
            <div className="flex gap-2 items-center text-blue-400">
                <div>Hi, John</div>
                <LanguageSelector />
                <div>
                    <CartIcon  className={"w-4 h-4"}/>
                </div>
            </div>
        </div>
    )
}


export default Nav; 