import ContentBody from './content/ContentBody';
import ContentFooter from './content/ContentFooter';
import ContentHeader from './content/ContentHeader';

const InnerContent = () => {
    return (
        <div className="inner-content">
            <ContentHeader />
            <ContentBody />
            <ContentFooter />
        </div>
    )
}

export default InnerContent