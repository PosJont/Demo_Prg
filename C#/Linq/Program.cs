using System;
using System.Data;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Linq;
using Newtonsoft.Json;

namespace Linq
{
    [Table(Name="學生備份")] //對應資料表
    class Student{
        [Column(Name="學號")]
        public string Std_ID {get;set;}
        [Column(Name="姓名")]
        public string Name {get;set;}
        [Column(Name="性別")]
        public string Sex {get;set;}
        [Column(Name="電話")]
        public string Tel {get;set;}
    }

    class Program
    {
        
        static void Main(string[] args)
        {
            Program pr = new Program();
            // pr.LinDBEaxmple();
            pr.linqArrayExmple();
            // Console.WriteLine("Hello World!");
        }

        public void linqArrayExmple(){
            string[] sName = {"周杰輪","周潤發","劉得華","周深"};
            // var vSearch = from s in sName where s.Contains("周") select s ;
            // var vSearch = from s in sName select s ;
            // var vSearch = sName.Where(sName => sName.Contains("周"));
            // var vSearch = sName;
            // foreach(var i in vSearch){
            //     Console.WriteLine(i + "\t" );
            // }    
        
            // Console.WriteLine(sName.First());
            // Console.WriteLine(sName.Last());

            Console.WriteLine("ElementAt -> 2 = {0}", sName.ElementAt(2));
            Console.WriteLine("First no.1 = {0} no.2 = {1}" ,sName.First(), sName.First(name => name.Length == 3));
            Console.WriteLine("Last  no.1 = {0} no.2 = {1}" ,sName.Last() , sName.Last(name => name.Length == 3));
        }




        public void LinDBEaxmple()
        {
            //conn sql string
            string strConn = "Data Source=DESKTOP-2HU7NL0\\CONT;Initial Catalog=Linq_Example;User ID=sa;Password=root;Pooling=True";
            DataContext dc = new DataContext(strConn);

            //GET TABLE
            Table<Student> students = dc.GetTable<Student>();

            //select data
            var data = from s in students select s;

            Console.WriteLine("學號\t姓名\t電話\t");

            foreach (var i in data)
            {
                Console.WriteLine(i.Std_ID + "\t" + i.Name + "\t" + i.Tel+ "\t" + i.Sex);
            }
        }
    }
}

