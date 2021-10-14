✅ Mobx, Mobx-react를 활용해 전역상태관리 구현

✅ state, action, derivation (computed, reaction) 개념 숙지

✅ state, action 정의 -> makeObservable or makeAutoObservable을 통해 'observable' 한 상태로 등록

✅ observer를 통한 컴포넌트 wrapping -> action을 통한 state 변경 -> update된 state는 해당 컴포넌트에 실시간 반영



"

-> First of all, there is the application state. Graphs of objects, arrays, primitives, references that forms the model of your application. These values are the “data cells” of your application.

-> Secondly there are derivations. Basically, any value that can be computed automatically from the state of your application. These derivations, or computed values, can range from simple values, like the number of unfinished todos, to complex stuff like a visual HTML representation of your todos. In spreadsheet terms: these are the formulas and charts of your application.

-> Reactions are very similar to derivations. The main difference is these functions don't produce a value. Instead, they run automatically to perform some task. Usually this is I/O related. They make sure that the DOM is updated or that network requests are made automatically at the right time.

-> Finally there are actions. Actions are all the things that alter the state. MobX will make sure that all changes to the application state caused by your actions are automatically processed by all derivations and reactions. Synchronously and glitch-free.

"



🚀 다음 목표 : mobx-state-tree (MST) 를 통한 상태관리
