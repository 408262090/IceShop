const Check = () => {
    return ( 
        <div className="Check">
            <h1>付款資訊</h1>
            <form>
                <label>帳號</label>
                <input
                  type ="text"
                  required
                />
                <label>密碼</label>
                <input
                  type ="text"
                  required
                />
                <button>確認</button>
            </form>
        </div>
     );
}
 
export default Check;