var sum = 0;

for (var i = 0; i < process.argv.length; i++)
{
  if (i > 1)
  {
    num = Number(process.argv[i]);
    sum += num;
  }
}

console.log(sum);