### [과제] 숙련주차 과제 답

### 문제 내용

- 추가하기 버튼을 클릭해도 추가한 아이템이 화면에 표시되지 않음.
- 추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.
    - 문제해결
        
        Form.jsx
        1) useState 수정하기 : id값과, isDone 에 대한 입력을 ⇒ 모듈 todos로 이동하였다.
        2) 조건문을 일반 구문으로 변경해주었다.
        3) useDispatch(); 가 입력되지 않아 해당 구문을 입력해주였다. 
        
        todos.jsx
        1) initaiState 를 변경해주었다. 객체 ⇒ 배열로
        
        2) case ADD_TODO: 부분에 입력받은 payload에 대한 값을 기존 state=initaiState과 더해 새로운 배열을 만들어주었다. 
        List.jsx
        1) useSelector에서 받아오는 값을 state.todos.todos ⇒ state.todos 변경해주었다. 
        
- 삭제 기능이 동작하지 않음.
    - 문제해결
        
        todos.jsx
        1) 리듀서 함수의 switch 구문에 DELETE_TODO 가 존재하지 않음
        2) 아래의 코드를 기록함으로 정상동작하게 함
        
        ```jsx
        case DELETE_TODO: 
              const clonetodo = [...state]
              const deletetodolists = clonetodo.filter(el => el.id !== action.payload)
              console.log(deletetodolists)
              return [...deletetodolists]
        ```
        
- 상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음.
- 완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함.
    - 문제해결
        
        1) useParams + Route 경로에 따라서 상세페이지의 id는 가져왔으나
        2) const todo = useSelector((state) => state.todos)의 문제가 있어서, 위의 추가하기에서 내용을 변경했건 것과 같이, 모듈에 입력된 내용에 따라서 코드를 수정하였다. 
        
        3) useParams에서 찾은 id와 todo에서 찾은 id가 일치하는 경우를 찾아서, 상세페이지에 기록하였다. 
        
        4) index 순서로 작성한 것이 아니라 나의 경우 id 가 고유한 값이기 때문에, 해당 값을 불러올 수 있도록 내용을 변경하였다. 
        
        ```jsx
        {/* <StLink to={`/${index}`} key={todo.id}> */}
        <StLink to={`/${todo.id}`} key={todo.id}>
        ```
        
        ```jsx
        const todo = useSelector((state) => state.todos);
        const { id } = useParams();
        const findtodo = todo.find(el => el.id === Number(id))
        ...
        <div>ID :{findtodo?.id}</div>
                    <StButton
                      borderColor="#ddd"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      이전으로
                    </StButton>
                  </StDialogHeader>
                  <StTitle>{findtodo?.title}</StTitle>
                  <StBody>{findtodo?.body}</StBody>
        </div>
        ```
        
- 취소 버튼 클릭시 기능이 작동하지 않음.
    - 문제해결
    Done으로 이동했을 때, button의 onClick 이벤트가 인자를 가져가지 않았기에, **TypeError: undefined is not an object** 발생
        
        ```jsx
        // onClick={onToggleStatusTodo}
        onClick={() => onToggleStatusTodo(todo.id)}
        ```
