import IconLinks from '../IconLinks';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default function Footer(){
    return (
        <>
            <IconLinks/>
            <footer className='z-2'>
                <FooterTop/>
                <FooterBottom/>
                
            </footer>
        </>
    )
}