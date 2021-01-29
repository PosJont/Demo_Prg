using System;
using System.Data;  
using System.Data.SqlClient;  
using System.Data.Sql;  
namespace Demo
{
    class Program
    {
        private static string GetConnectionString="Data Source=DESKTOP-JCONT\\SQLEXPRESS;Initial Catalog=MES_Cloud;User ID=sa;Password=root";

        /// <summary>
        /// 傳入一個SQL語法，回傳一個DataTable
        /// </summary>
        /// <param name="pSql">Select語法</param>
        /// <returns></returns>
        public DataTable Get_DataTable(string pSql)
        {
            DataTable datatable = new DataTable();
            try
            {
                if (pSql.Length > 0)
                {
                    using (SqlConnection con_db =new SqlConnection(GetConnectionString))
                    {
                        SqlDataAdapter Adapter = new SqlDataAdapter(pSql, con_db);
                        Adapter.Fill(datatable);
                    }
                }
                return datatable;
            }
            catch (Exception)
            {
                //錯誤處理
                throw;
            }
        }
        static void Main(string[] args)
        {
            Program Program = new Program();
            Program.Demo_1();
        }
        public void Demo_1()
        {
            string sSql = "SELECT * FROM BDP08_0000";
            DataTable dTmp =Get_DataTable(sSql);   
            foreach (DataColumn dName  in dTmp.Columns)
            {
                Console.WriteLine(dName.ToString());
                foreach(DataRow dRows in dTmp.Rows){
                    Console.Write(dRows[dName].ToString()+" ");
                }
                Console.WriteLine("");
            }  
        }
  
    }  
    




}
