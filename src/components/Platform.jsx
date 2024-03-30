import LeftProfile from "./LeftProfile"
import Transanctions from "./Transanctions"

const Platform = () => {
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem('jwt')) {
          navigate('/login');
        }
      }, []);

    return (
    <div className="grid md:grid-cols-6 gap-4">
        <div className="md:col-span-1 bg-gray-50">
            <LeftProfile />
        </div>
        <div className="md:col-span-4 bg-red-500">
            Chat Section
        </div>
        <div className="md:col-span-1 bg-gray-50">
            <Transanctions/>
        </div>
    </div>
    
    )
}

export default Platform