

const MemoItem = ({memo, onRemove}) => {
    return (
        <div>
            <h3>제목 : {memo.title} </h3>

            <button
            onClick={()=>{
                onRemove(memo.id);}}
            >X</button>

            
            <p>내용 : {memo.text}</p>
        </div>
    )
}


//모듈에서 함수 설정
const Memo = ({title, text, memos, onChangeText,onChangeTitle, onInsert, onRemove}) => {
    const memoAdd = () => {
        onInsert( {title:title, text:text} );
        onChangeText("");
        onChangeTitle("");
    };

    return (
        <div>
            <h1>메모하는 공간입니다.</h1>
            <input type="text" value={title} 
            onChange={(e) => {
                onChangeTitle(e.target.value);}}
            >{" "}
            </input>

            <textarea value={text} 
            onChange={(e) => {
                onChangeText(e.target.value)
            }} />

            <br></br>
            
            <button onClick={memoAdd}>입력</button>

            <hr></hr>
            {/* 여기 입력값이 출력  */}
            {memos.map((memo)=> (
                <MemoItem 
                memo={memo}
                onRemove={onRemove}
                key={memo.id}></MemoItem>
            ))}
        </div>
    )
};
export default Memo;