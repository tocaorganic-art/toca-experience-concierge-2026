@echo off
cd C:\Users\User\toca-experience-concierge-2026
echo. > .redeploy
git add .redeploy
git commit -m "chore: trigger redeploy with env vars"
git push origin main
del .redeploy
git add -A
git commit -m "chore: remove redeploy trigger"
git push origin main
echo REDEPLOY TRIGGERED
