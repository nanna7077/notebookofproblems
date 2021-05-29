#include<stdio.h>
int main()
{
int a, b, c, d, e, i;
scanf("%d", &a);
scanf("%d", &b);
scanf("%d", &c);
scanf("%d", &d);
scanf("%d", &e);
printf("[");
for (i=a;i<=b;i++)
{
printf(" %d ",i);
}
printf("]");
printf("[");
for (i=b;i<=c;i++)
{
printf(" %d ",i);
}
printf("[");
printf("]");
for (i=c;i<=d;i++)
{
printf(" %d ",i);
}
printf("[");
printf("]");
for (i=d;i<=e;i++)
{
printf(" %d ",i);
}
printf("]");
return 0;
}
