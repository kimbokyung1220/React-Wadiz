interface accountInfoProps{
    accountYn: boolean,
    bank: string,
    accountNm?: string,
    button: string
}

const AccountComponent = ({accountYn, bank, accountNm, button}: accountInfoProps) => {
    return (
        <>
            {/* <!-- Wrap-Tbl : Start --> */}
            <div className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-tit">
                        <h2 className="fz-20 fc-1 fw-bold">환불계좌</h2>
                    </div>
                </div>
                <div className="box-header">
                    <div className="box-tit">
                        { accountYn ? <h2 className="fz-18 fc-1">{bank}</h2> : <h2 className="fz-18 fc-1">등록된 환불계좌가 없습니다.</h2> }
                        { accountYn ? <span className="fz-18 fc-1">{accountNm}</span> : <></> }
                    </div>
                    <div className="box-option">
                        <button type="button" className="btn btn btn-primary">{button}</button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl className="vertical">
                            <dd>
                                <div className="form-group">
                                    {/* <!-- Comp-Help : Start --> */}
                                    <div className="comp-help">
                                        <ul className="help-list">
                                            <li className="list">
                                                <i className="ico ico-help"></i><span className="fz-14 fc-2">환불 주의사항</span>
                                            </li>
                                            <li className="list">
                                                <span className="fz-14 fc-4 bullet">진행중인 캠페인이 있으면 환불 신청이 불가능합니다.</span>
                                            </li>
                                            <li className="list">
                                                <span className="fz-14 fc-4 bullet">캠페인 정산이 모두 완료되어야 환불 신청이 가능합니다.</span>
                                            </li>
                                            <li className="list">
                                                <span className="fz-14 fc-4 bullet">환불을 신청하면 유상비즈머니 잔액이 모두 환불됩니다.</span>
                                            </li>
                                            <li className="list">
                                                <span className="fz-14 fc-4 bullet">유상비즈머니를 충전한 방식 그대로 환불됩니다.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Comp-Help End --> */}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-right">
                        <button type="button" className="btn btn-primary-outline">환불내역</button>
                        <button type="button" className="btn btn btn-danger-outline">환불신청</button>
                    </div>
                </div>
            </div>
            {/* <!-- Wrap-Tbl : End --> */}

        </>
    )
}

export default AccountComponent