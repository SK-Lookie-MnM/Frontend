import './Value.css';

import top from '../../assets/Value/top.png';
import main from '../../assets/Value/main.png';
import button from '../../assets/Value/button.png';

const Value = () => {
    return (
        <div className="value">
            <img src={top} className="top" alt="top"/>
            <img src={main} className="main" alt="main"/>
            <a href="https://forms.gle/YqSgkjhDM86mjX9N8" target="_blank" rel="noopener noreferrer"
               className="button-link">
                <img src={button} className="button3" alt="Coder Button 2"/>
            </a>
        </div>
    );
};
export default Value