# 💨 Performance

## `Memo`

#### **Funcionamento:**

1. shallow compare(comparação rasa): se o componente não mudar, ele não será re-renderizado

#### **Casos de uso:**

1. Pure functional components: O componente é puramente funcional, não tem estado e não tem dependências externas.
2. Render too often: O componente é muito complexo e pode ser renderizado muitas vezes.
3. Re-renders with same props: O componente renderiza muitas vezes e com as mesmas props
4. Medium to big size

> Exemplo:

```javascript
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
```

---

## `useMemo`

#### **Funcionamento:**

1. igualdade referencial: compara o espaço alocado na memória

#### **Casos de uso:**

1. Cálculos pesados
2. Igualdade referencial: quando a informação é repassada à um componente filho

# 🧠 Learn More

### **Memo**:

### **useMemo**:

- [React.useMemo na prática](https://medium.com/reactbrasil/react-usememo-na-pr%C3%A1tica-692110771c01).
- [Qual é a diferença entre os hooks useMemo e useCallback do React?](https://pt.stackoverflow.com/questions/405781/qual-%C3%A9-a-diferen%C3%A7a-entre-os-hooks-usememo-e-usecallback-do-react)

### **useCallback**:

- [Quando usar useCallback, useMemo e useEffect](https://www.ti-enxame.com/pt/reactjs/quando-usar-usecallback-usememo-e-useeffect/811147736/)
- [Your Guide to React.useCallback()
  ](https://dmitripavlutin.com/dont-overuse-react-usecallback/)
