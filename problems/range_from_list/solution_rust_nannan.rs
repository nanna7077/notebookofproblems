use std::io;
fn main()
{
let mut input = String::new();
io::stdin().read_line(&mut input).unwrap();
let a: i32 = input.trim().parse().unwrap();
let mut input = String::new();
io::stdin().read_line(&mut input).unwrap();
let b: i32 = input.trim().parse().unwrap();
let mut input = String::new();
io::stdin().read_line(&mut input).unwrap();
let c: i32 = input.trim().parse().unwrap();
let mut input = String::new();
io::stdin().read_line(&mut input).unwrap();
let d: i32 = input.trim().parse().unwrap();
let mut input = String::new();
io::stdin().read_line(&mut input).unwrap();
let e: i32 = input.trim().parse().unwrap();

print!("[ ");
for i in a..b{
print!(" {} ",i);
}
print!(" ]");
println!("");
print!("[ ");
for i in b..c{
print!(" {} ",i);
}
print!(" ]");
println!("");
print!("[ ");
for i in d..e{
print!(" {} ",i);
}
print!(" ]");
}
