import Wrapper from '../assets/Wrappers/Error'
import { useRouteError } from 'react-router-dom'
import Error404 from '../assets/images/error-404.svg'

const Error = () => {

    const error = useRouteError()

    if (error.status == 404) {
        return (
            <Wrapper>
                <div className='img-div'><img src={Error404} alt="page not found" /></div>
            </Wrapper>
        )
    }

    return (
        <wrapper>Error</wrapper>
    )
}
export default Error