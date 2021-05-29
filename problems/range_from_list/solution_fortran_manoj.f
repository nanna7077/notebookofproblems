program listgen
integer :: a
integer :: b
integer :: c
integer :: d
Read *, a
Read *, b
Read *, c
Read *, d
write(*, fmt="(1x,a,i0)", advance="no") "["
do n = a, b  
write(*, fmt="(1x,a,i0)", advance="no") " ", n
end do
print*, "]"
write(*, fmt="(1x,a,i0)", advance="no") "["
do j = b, c  
write(*, fmt="(1x,a,i0)", advance="no") "", n
end do
print*, "]"
write(*, fmt="(1x,a,i0)", advance="no") "["
do k = c, d  
write(*, fmt="(1x,a,i0)", advance="no") "", n
end do
print*, "]"
end program listgen
