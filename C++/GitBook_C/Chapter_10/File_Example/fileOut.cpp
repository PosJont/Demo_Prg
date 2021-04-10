#include <iostream>
#include <fstream> 
#define size 10

using namespace std;
int main()
{
        std::fstream file;                              //fstream物件
        char str[size] = "測試中", str1[size];          //宣告 char
        int filespace =0; 

        file.open("Reader.txt", ios::out | ios::trunc); //開啟檔案為輸出狀態，若檔案已存在則清除檔案內容重新寫入
        file.write(str, size);                          //將str寫入檔案
        file.close();                                   //關閉檔案

        file.open("Reader.txt", ios::in);               //開啟檔案為輸出狀態
        file.read(str1, size);                          //從檔案讀取內容給str1
        while (1)
        {
            if(file.eof()) break;
            filespace++;   
        }

        file.close();                                   //關閉檔案

        cout << "Reading data from file...\n" << str1 << endl;
        cout << "Reading file bytes :" << filespace << endl;
        system("start Reader.txt");
        return 0;
}