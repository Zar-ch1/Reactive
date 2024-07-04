//Left is failure
const Left = (value)=>({
    value,
    map(fn)
    {
        return Left.of(value);
    },
    matchWith(context)//context is obj=>{left:()=>, right: ()=>}
    {
        //console.log('Failed', context)
        return context.left(value);
    },
    valueOf()
    {
        return value;
    }
});
Left.of = Left;
//Right is Success
const Right = (value)=>({
    value,
    map(fn)
    {
        return Right.of(fn(value));
    },
    matchWith(context)
    {
        //console.log('Success', context)
        return context.right(value);
    },
    valueOf()
    {
        return value;
    }
});
Right.of = Right;