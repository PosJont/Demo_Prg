#include <iostream>
#include <fstream> 
#include <stdlib.h>
#define size 10

using namespace std;
int main()
{
        fstream file;
        char str[5] = {"Mary","John","Judy","Joe"};  //宣告字串指標陣列
        int id[5] = {100,200,300,400};

        file.open("Reader.txt", ios::out);      //開啟檔案

        if(!file)     //檢查檔案是否成功開啟
        {
                cerr << "Can't open file!\n";
                exit(1);     //在不正常情形下，中斷程式的執行
        }

        for(int i = 0; i < 4; i++){ //將資料輸出至檔案
            file << id[i] << " " << str[i] << "\n";
        }      
        return 0;
}