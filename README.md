# Learning about React-Redux

```
mapDispatchToProps

Class Components에 사용됩니다: mapDispatchToProps는 주로 클래스 컴포넌트에서 Redux 액션을 디스패치할 때 사용됩니다.

Props로 액션 디스패치 함수 전달: mapDispatchToProps는 액션 디스패치 함수를 컴포넌트의 props로 매핑합니다. 이를 통해 컴포넌트는 this.props.someAction()과 같은 방식으로 액션을 디스패치할 수 있습니다.

컨테이너 컴포넌트에 사용: mapDispatchToProps는 주로 컨테이너 컴포넌트에서 사용되며, 컨테이너 컴포넌트는 Redux와 직접 상호 작용합니다.
```

```
useDispatch() 훅

Functional Components에 사용됩니다: useDispatch() 훅은 주로 함수형 컴포넌트에서 Redux 액션을 디스패치할 때 사용됩니다.

직접 디스패치 함수 얻기: useDispatch()는 Redux 스토어로부터 디스패치 함수를 얻을 수 있는 훅입니다. 이를 통해 함수형 컴포넌트에서 직접 액션을 디스패치할 수 있습니다.

컴포넌트 내부에서 사용: useDispatch()는 함수형 컴포넌트 내부에서 사용되므로 컴포넌트가 리덕스와 직접 상호 작용하는 데 사용됩니다.
```