#include <iostream>
#include <cstdlib>
#include <string>

using  namespace std;

enum Is_Use{
    yes,
    no 
};
std::istream& operator>>( std::istream& is, Is_Use& i )
{
    int tmp ;
    if ( is >> tmp )
        i = static_cast<Is_Use>( tmp ) ;
    return is ;
}

int main(int argc, char const *argv[])
{

    enum Is_Use use;
    cin >> use;
    if(use==yes){
        cout << use <<": Yes";
    }
    if(use==no){
        cout << use<<": No";
    }
    
    return 0;
}
