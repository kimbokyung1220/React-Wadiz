import Sidebar from './Sidebar';
import InnerContent from './InnerContent';

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <InnerContent />
        </div>
    )
}

export default Content