#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin >> t;
    int i = 1;
    while (t--)
    {
        int r, a, b;
        cin >> r >> a >> b;
        vector<int> ans;
        int value=r;
        ans.push_back(r);
        while (value>0)
        {
            value=value*a;
            ans.push_back(value);
            
                value=(value)/b;
                ans.push_back(value);
            
        }
      
        double data=0.0;
        for(auto a:ans){
           data+=a*a*3.141593;
        }
          cout<<"Case #"<<i<<": "<<setprecision(6)<<data<<endl;
        i++;
    }
    return 0;
}