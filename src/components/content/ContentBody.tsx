import BoxComponent from "./body/BoxComponent";
import SelectBoxComponent from "./body/SelectboxComponent";
import NoticeComponent from "./body/NoticeComponent";
import AccountComponent from "./body/AccountComponent";



const ContentBody = () => {
    return (
        <div className="content-body">
            <div className="container-fluid">

                <div className="row">
                    {/* BoxComponent start */}
                    <div className="col col-4">
                        <BoxComponent text={"충전사업자번호"} desc={"메이커명칭"} tooltipYn={false} addYn={false} />
                    </div>
                    <div className="col col-4">
                        <BoxComponent text={"휴대폰 번호"} desc={"010-1234-5678"} tooltipYn={true} addYn={false} />
                    </div>
                    <div className="col col-4">
                        <BoxComponent text={"Wa-biz 약관 동의일"} desc={"YYYY-MM-DD"} tooltipYn={true} addYn={true} />
                    </div>
                    {/* BoxComponent end */}
                </div>

                {/* SelectBoxcomponent start */}
                <div className="row">
                    <div className="col col-12">
                        <SelectBoxComponent />
                    </div>
                </div>
                {/* SelectBoxcomponent end */}

                {/* Notice, Account start */}
                <div className="row flex-container">
                    <div className="col col-6">
                        <NoticeComponent switchId={"switch-01"}/>
                    </div>
                    <div className="col col-6">
                        <AccountComponent accountYn={true} bank={"하나은행"} accountNm={"123-45-6789-012"} button={"변경"} />
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="col col-6">
                        <NoticeComponent switchId={"switch-02"}/>
                    </div>
                    <div className="col col-6">
                        <AccountComponent accountYn={false} bank={"등록된 환불계좌가 없습니다."} button={"등록"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBody