import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contacts() {
    return (
        <footer>
            <ul className="footerList">
                <li className="footerList-item">
                    <a href="https://linkedin.com/in/bruno-baptista5"><LinkedInIcon fontSize="large" /></a>
                </li>
                <li className="footerList-item">
                    <a href="mailto:baptistabruno5@gmail.com"><EmailIcon fontSize="large" /></a>
                </li>
                <li className="footerList-item">
                    <a href="https://github.com/BrunoBaptista-1"><GitHubIcon fontSize="large" /></a>
                </li>
            </ul>
        </footer>
    );
}

export default Contacts;