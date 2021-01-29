
/*
小群體
問題描述
    Q同學正在學習程式， P 老師出了以下的題目讓他練習。
    一群人在一時經常會形成一個一個的小
    群 體。假設有 N 個人，編號由 0 到 N 1 ，每
    個人寫下他最好朋友的編號（最好朋友有可能是他自己的編號，如果他自己沒有其
    他好友）， 在本題中， 每個人的 好友編號絕對不會重複，也就是說 0 到 N 1 每個數字
     恰好 出現一次 。
    這種好友的關係會形成一
    些 小 群 體。例如 N=10 ，
    好友編號如下   0 1 2 3 4 5 6 7 8 9
    好友編號 4 7 2 9 6 0 8 1 5 3 0
    的好友是 4 4 的好友是 6 6 的好友是 8 8 的好友是 5 5 的好友是 0 ，所以 0 、 4 、
    6 、 8 、和 5 就形成了一個小群體。另外， 1 的好友是 7 而且 7 的好友是 1 ，所以 1 和
    7 形成另一個小 群 體，同理， 3 和 9 是一個小 群 體，而 2 的好友是自己，因此他 自己
    是一個小 群 體 。總而言之， 在這 個例子 裡有 4 個小 群 體 0 4 6 8 5 、 { 、 { 、
    { 。 本題的問題是：輸入每個人的好友編號，計算出總共有幾個小群體。
    Q
    同學想了想卻不知如何下手，和藹可親的 P 老師於是給了他以下的提示：如果你從
    任何一人 x 開始，追蹤他的好友，好友 的好友， ，……..，這樣一直下去，一定會形成一
    個圈回到 x 這就是一個小群體。如果我們追蹤的過程中把追蹤過的加以標記，很容
    易知道哪些人已經追蹤過，因此，當一個小群體找到之後，我們再從任何一個還未追
    蹤過的開始繼續找下一個小群體，直到所有的人追蹤完畢。
    Q
    同學聽完之後很順利的完成了作業。
    在本題中，你的任務與
    Q 同學一樣：給定一群人的好友，請計算出小群體個數。
輸入格式
    第一行 是一個 正整數 N ，說明團體中人數。
    第二行 依序是 0 的好友編號 、 1 的好友編號 、 、 N 1 的好友編號。共 有 N 個數字，
    包含 0 到 N 1 的每個數字恰好出 現一次 ，數字間會有一個空白隔開。
輸出格式
    請輸出小
    群 體的個數。 不要有任何多餘的字或空白，並 以換行字元結尾 。
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int count = 0;
    int number, j, k;

    scanf("%d", &number);
    int num_x[1000] = {0};
    int num_y[1000] = {0};

    for (int i = 0; i < number; i++)
        scanf("%d", &num_x[i]);

    for (k = 0; k < number; k++)
    {
        if (num_y[k] == 0)
        {
            count++;
            num_y[k] = 1;
            j = num_x[k];
            while (j != k)
            {
                num_y[j] = 1;
                j = num_x[j];
            }
        }
    }
    printf("%-2d", count);

    return 0;
}