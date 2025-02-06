export interface vector {
    x: number,
    y: number
}
export const Vector = {
    add: function (Vec_One: vector, Vec_Two: vector): vector {
        return {
            x: Vec_One.x + Vec_Two.x,
            y: Vec_One.y + Vec_Two.y
        }
    }
}