#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    int cont = 0 ; 
    int ioption =  0; //option 
    int  oneTea = 30; int  twoTea = 25;
    do{
        cout << "請輸入哪種飲料";
        cout << "\n 1.奶茶\t2.紅茶 >>";
        cin >> ioption ;
        cout << "請輸入金額";
        cin >> cont;
        if(cont< oneTea || cont < twoTea){cout <<"\n輸入金額過少，請再重新輸入一次";continue;}
        if(ioption  == 1)
            cout<<"\n退還金額為 : " << cont  -oneTea  <<"\n";
        else if (ioption ==2) 
            cout << "\n退還金額為 : " << cont  -twoTea  <<"\n";
        else cout << "\n無此商品" ; 
        
    }while(ioption != 0 );
    return 0;
}
