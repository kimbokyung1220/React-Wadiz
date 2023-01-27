import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


interface boxProps {
    text: string,
    desc: string,
    tooltipYn: boolean,
    tooltipDesc?: string,
    addYn: boolean,
}



const BoxComponent = ({ text, desc, tooltipYn, tooltipDesc, addYn }: boxProps) => {
    return (
        <>
            <div className="wrap-section wrap-tbl wrap-dashboard">
                <div className="box-body">
                    <div className="tbl">
                        <dl className="vertical">
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-14 fc-4">
                                        {text}
                                        {tooltipYn ? <a className="ico-tooltip tooltip-f" id="tooltip" title="" data-tooltip-content="hello!!!!!!"></a> : <a></a>}
                                    </span>
                                    {/* <div tabindex="-1" className="tooltip tooltip-bottom" style="left: 783.359px; top: 262.797px; z-index: 9015; display: none;">
                                        <div className="tooltip-content">
                                            <p className="fz-12 fc-0 fw-medium">타이틀 제목</p>
                                            <p className="fz-12 fc-0">툴팁내용입니다.툴팁내용입니다.툴팁내용입니다. 툴팁내용입니다.툴팁내용입니다.툴팁내용입니다.</p>
                                        </div>
                                        <div class="tooltip-arrow-outer" style="border-bottom-color: rgb(0, 0, 0);"></div>
                                        <div class="tooltip-arrow" style="border-bottom-color: rgb(52, 58, 64);"></div>
                                    </div> */}

                                    <Tooltip anchorId="tooltip" />
                                </div>
                                    
                            </dt>
                            <dd>
                                <div className="form-group flex-container">
                                    <div className="box-left">

                                        <span className="comp-txt">
                                            <span className="table">
                                                <span className="table-cell">
                                                    <b className="fz-20 fc-2 fw-medium">{desc}</b>
                                                </span>
                                            </span>
                                        </span>

                                    </div>
                                    <div className="box-right">

                                        <span className="comp-txt">
                                            <span className="table">
                                                <span className="table-cell">
                                                    {addYn ? <b className="fz-12 fc-6"><a className="txt-link">개인정보 처리방침 보기</a></b> : <a></a>}
                                                    {addYn ? <b className="fz-12 fc-6"><a className="txt-link">광고서비스 이용약관 보기</a></b> : <a></a>}
                                                </span>
                                            </span>
                                        </span>

                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxComponent